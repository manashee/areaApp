import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AreaAppSharedLibsModule, AreaAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AreaAppSharedLibsModule, AreaAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AreaAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AreaAppSharedModule {
  static forRoot() {
    return {
      ngModule: AreaAppSharedModule
    };
  }
}
