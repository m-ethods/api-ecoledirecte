import { Message } from "../typings/Message";
import { Timeline } from "../typings/Timeline";
import { Note } from "../typings/Note";
import { Account } from "../typings/Account";
import { Cloud } from "../typings/Cloud";
import { Sanction } from "../typings/Sanctions";
import { ClassLife } from "../typings/ClassLife";
import { HomeworkDescription } from "../typings/Homework";
import { Document } from "../typings/Documents";
declare function getMessages(token: string, accountID: number): Promise<Message | null>;
declare function getTimeline(token: string, accountID: number): Promise<Timeline[] | null>;
declare function getNotes(token: string, accountID: number): Promise<Note | null>;
declare function accounts(username: string, password: string): Promise<Account[] | null>;
declare function login(username: string, password: string): Promise<string | null>;
declare function getCloud(token: string, accountID: number): Promise<Cloud[] | null>;
declare function getSanctions(token: string, accountID: number): Promise<Sanction | null>;
declare function getClassLife(token: string, classID: number): Promise<ClassLife | null>;
declare function getHomeworks(token: string, accountID: number): Promise<Array<HomeworkDescription[]> | null>;
declare function getDocuments(token: string): Promise<Document | null>;
declare function getClassId(account: Account): number;
declare const _default: {
    login: typeof login;
    getTimeline: typeof getTimeline;
    getMessages: typeof getMessages;
    getNotes: typeof getNotes;
    getCloud: typeof getCloud;
    getClassId: typeof getClassId;
    getClassLife: typeof getClassLife;
    getSanctions: typeof getSanctions;
    getHomeworks: typeof getHomeworks;
    getDocuments: typeof getDocuments;
    accounts: typeof accounts;
};
export = _default;
