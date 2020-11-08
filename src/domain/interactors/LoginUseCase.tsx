import NetworkManager from '../../data/NetworkManager';
import AuthHolder from '../entity/AuthHolder';

// In this example the use case has only one method. 
// Usually use cases have only one public method, which implements complex 
// logic for one action. In this case — you should perform validation and then 
// send validation data to the API method of authorization.

// TODO: can i share or combine uses cases?. for example import one into other
export default class LoginUseCase {
  private networkManager: NetworkManager;
  private authHolder: AuthHolder;

  public constructor(networkManager: NetworkManager, authHolder: AuthHolder) {
    this.networkManager = networkManager;
    this.authHolder = authHolder;
  };
  
  public async loginUser(email: string, password: string): Promise<void> {
    const validationResult = await this.networkManager.validateCredentials(email, password);
    const authResult = await this.networkManager.login(
      email, 
      password
    );

    this.authHolder.onSignedIn(authResult.authorizationToken);
  };
};