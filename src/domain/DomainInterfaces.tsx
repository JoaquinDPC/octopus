// One more simple structure for transferring between layers
export interface ValidationResult {
  validationKey: string;
};

// A simple data structure for transferring between layers
export interface AuthorizationResult {
  authorizationToken: string;
};

export interface AuthListener {
  onAuthChanged(): void;
};