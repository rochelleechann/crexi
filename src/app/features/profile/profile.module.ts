import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Components
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { ProfileListComponent } from './profile-list';
import { LayoutModule } from '@core/layout/layout.module';
import { ProfileEffects } from './store/profile.effects';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    entryComponents: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    exports: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forRoot([ProfileEffects])
    ]
})
export class ProfileModule { }
