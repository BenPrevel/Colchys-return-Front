import { Member } from './member.model';

export class Meeting {
  private _firstname: string;
  private _lastname: string;
  private _date: Date;
  private _subject: string;
  private _description: string;
  private _member: Member;

  constructor(
    firstname: string,
    lastname: string,
    date: Date,
    subject: string,
    description: string,
    member: Member
  ) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._date = date;
    this._subject = subject;
    this._description = description;
    this._member = member;
  }

  /**
   * Getter firstname
   * @return {string}
   */
  public get firstname(): string {
    return this._firstname;
  }

  /**
   * Getter lastname
   * @return {string}
   */
  public get lastname(): string {
    return this._lastname;
  }

  /**
   * Getter date
   * @return {Date}
   */
  public get date(): Date {
    return this._date;
  }

  /**
   * Getter subject
   * @return {string}
   */
  public get subject(): string {
    return this._subject;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter firstname
   * @param {string} value
   */
  public set firstname(value: string) {
    this._firstname = value;
  }

  /**
   * Setter lastname
   * @param {string} value
   */
  public set lastname(value: string) {
    this._lastname = value;
  }

  /**
   * Setter date
   * @param {Date} value
   */
  public set date(value: Date) {
    this._date = value;
  }

  /**
   * Setter subject
   * @param {string} value
   */
  public set subject(value: string) {
    this._subject = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Getter member
   * @return {Member}
   */
  public get member(): Member {
    return this._member;
  }

  /**
   * Setter member
   * @param {Member} value
   */
  public set member(value: Member) {
    this._member = value;
  }
}
