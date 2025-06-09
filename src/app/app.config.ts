import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { QuestionComponent } from './questions/question/question';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FormsModule), // ✅ Esto es lo que necesitas para ngModel
    provideRouter([
      { path: '', component: QuestionComponent }
    ]),
    provideHttpClient(),
    provideAnimations()
  ]
};
