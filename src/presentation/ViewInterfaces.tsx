export interface BaseView {
  onViewModelChanged(): void;
};

export interface AuthComponentProps {
  authViewModel: AuthViewModel;
};

export interface AuthComponentState {
  emailQuery: string;
  passwordQuery: string;
  isSignInButtonVisible: boolean;
  isSignOutButtonVisible: boolean;
  isShowError: boolean;
  errorMessage: string;
  authStatus: string;
  isAuthStatusPositive: boolean;
};

export interface BaseViewModel {
  attachView(baseView: BaseView): void;
  detachView(): void;
};

export interface AuthViewModel extends BaseViewModel {
  emailQuery: string;
  passwordQuery: string;
  isSignInButtonVisible: boolean;
  isSignOutButtonVisible: boolean;
  isShowError: boolean;
  errorMessage: string;
  authStatus: string;
  isAuthStatusPositive: boolean;
  onEmailQueryChanged(loginQuery: string): void;
  onPasswordQueryChanged(passwordQuery: string): void;
  onClickSignIn(): void;
  onClickSignOut(): void;
};