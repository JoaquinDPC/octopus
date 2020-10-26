import AuthRepository from '../../repository/auth/AuthRepository';
import AuthHolder from '../../entity/auth/models/AuthHolder';

// In this example the use case has only one method. 
// Usually use cases have only one public method, which implements complex 
// logic for one action. In this case — you should perform validation and then 
// send validation data to the API method of authorization.

// can i share or combine uses cases?. for example import one into other

export default class LoginUseCase {
  private authRepository: AuthRepository;
  private authHolder: AuthHolder;

  public constructor(authRepository: AuthRepository, authHolder: AuthHolder) {
    this.authRepository = authRepository;
    this.authHolder = authHolder;
  };

  /**
   * @throws {Error} if credentials are not valid or have not passed
   */
  public async loginUser(email: string, password: string): Promise<void> {
    const validationResult = await this.authRepository.validateCredentials(email, password);
    const authResult = await this.authRepository.login(
      email,
      password,
      validationResult.validationKey,
    );

    this.authHolder.onSignedIn(authResult.authorizationToken);
  };
};