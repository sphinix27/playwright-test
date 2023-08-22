import { test, expect, type APIRequestContext } from '@playwright/test';
import { WorkspaceSideBarPage } from '../pages/workspace-sidebar-page';
import { WorkspaceCreatePage } from '../pages/workspace-create-page';
import { WorkspaceApi } from '../api/workspace-api';
import { MemberApi } from '../api/member-api';

const workspaceName = 'Testing';

const deleteWorkspace = async (request: APIRequestContext) => {
  const workspaceApi = new WorkspaceApi(request);
  const memberApi = new MemberApi(request);
  const allWorkspaces = await memberApi.getOrganizations();
  const allWorkspacesJson = await allWorkspaces.json();
  for (let index = 0; index < allWorkspacesJson.length; index++) {
    const workspace = allWorkspacesJson[index];
    if (workspace.name.startsWith(workspaceName.toLocaleLowerCase())) {
      await workspaceApi.delete(workspace.id);
    }
  }
};

test.describe('Workspace', () => {
  test('Create', async ({ page }) => {
    const workspaceSideBar = new WorkspaceSideBarPage(page);
    const workspaceCreate = new WorkspaceCreatePage(page);

    await page.goto(`/u/${process.env.TRELLO_USERNAME!}/boards`);
    await workspaceSideBar.openModal();
    await workspaceCreate.create(workspaceName);
    const re = new RegExp(`w\/${workspaceName.toLocaleLowerCase()}`);
    await expect(page).toHaveURL(re);
  });

  test.afterEach(async ({ request }) => {
    await deleteWorkspace(request);
  });
});
