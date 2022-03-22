export class Member {
  private _id: number;
  private _govFirstname: string;
  private _govLastname: string;
  private _role: string;
  private _ministry: string;

  constructor(
    id: number,
    govFirstname: string,
    govLastname: string,
    role: string,
    ministry: string
  ) {
    this._id = id;
    this._govFirstname = govFirstname;
    this._govLastname = govLastname;
    this._role = role;
    this._ministry = ministry;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Getter govFirstname
   * @return {string}
   */
  public get govFirstname(): string {
    return this._govFirstname;
  }

  /**
   * Getter govLastname
   * @return {string}
   */
  public get govLastname(): string {
    return this._govLastname;
  }

  /**
   * Getter role
   * @return {string}
   */
  public get role(): string {
    return this._role;
  }

  /**
   * Getter ministry
   * @return {string}
   */
  public get ministry(): string {
    return this._ministry;
  }

  /**
   * Setter govFirstname
   * @param {string} value
   */
  public set govFirstname(value: string) {
    this._govFirstname = value;
  }

  /**
   * Setter govLastname
   * @param {string} value
   */
  public set govLastname(value: string) {
    this._govLastname = value;
  }

  /**
   * Setter role
   * @param {string} value
   */
  public set role(value: string) {
    this._role = value;
  }

  /**
   * Setter ministry
   * @param {string} value
   */
  public set ministry(value: string) {
    this._ministry = value;
  }
}
