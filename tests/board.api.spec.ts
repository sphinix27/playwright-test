import { test, expect, type APIRequestContext } from '@playwright/test';
import { BoardApi } from '../api/board-api';
import { MemberApi } from '../api/member-api';

const boardName = 'example';

const deleteBoard = async (request: APIRequestContext) => {
  const boardApi = new BoardApi(request);
  const memberApi = new MemberApi(request);
  const allBoards = await memberApi.getBoards();
  const allBoardsBody = await allBoards.json();
  for (let index = 0; index < allBoardsBody.length; index++) {
    const board = allBoardsBody[index];
    if (boardName === board.name) {
      await boardApi.delete(board.id);
    }
  }
};

test.describe('Boards', async () => {
  test('Create', async ({ request }) => {
    const boardApi = new BoardApi(request);
    const created = await boardApi.create(boardName);
    expect(created.ok()).toBeTruthy();
  });

  test.afterEach(async ({ request }) => {
    await deleteBoard(request);
  });
});
