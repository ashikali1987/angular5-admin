import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule],
    exports: [MatButtonModule]
})
export class AppMaterialModule {}