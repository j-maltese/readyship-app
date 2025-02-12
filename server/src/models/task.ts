import { DBDataSource } from '../config';

export class TaskModel {
  async getByProjectIdAndUserId(projectId: string, userId: string) {
    return DBDataSource.instance.client.query(
      'SELECT t.*, aht.* FROM task AS t JOIN account_has_task AS aht ON t.id = t.projectid WHERE t.projectid = $1 AND aht.accountid = $2',
      [projectId, userId]
    );
  }

  async getByProjectId(projectId: string) {
    return DBDataSource.instance.client.query(
      'SELECT * FROM task where projectid = $1',
      [projectId]
    );
  }
}
