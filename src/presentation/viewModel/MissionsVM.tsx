// Interfaces
import { AuthListener } from '../../domain/DomainInterfaces';
import { IMissionsVM, BaseView } from '../ViewInterfaces';

export default class MissionsVM implements IMissionsVM, AuthListener {
  // status
  public name: string;
  public age: number;

  // params
  private homeMissionsUseCase: any;
  private homeMissionsentity: any;
  private baseView?: BaseView;

  public constructor(useCase: any, entity: any) {
    this.name = "Joaquin";
    this.age = 25;

    this.homeMissionsUseCase = useCase;
    this.homeMissionsentity = entity;
  };

  public onAuthChanged = (): void => {
    console.log("VIEW MODEL CHANGED")
  };

  public attachView = (baseView: BaseView): void => {
    this.baseView = baseView;
  };

  public detachView = (): void => {
    this.baseView = undefined;
  };
};