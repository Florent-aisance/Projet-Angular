import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TreeModule } from 'primeng/tree';

@NgModule({
  exports: [
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    ConfirmPopupModule,
    ChartModule,
    ChipModule,
    ChipsModule,
    CheckboxModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    InputSwitchModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    ListboxModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    OverlayPanelModule,
    PanelMenuModule,
    PanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ScrollPanelModule,
    SelectButtonModule,
    SidebarModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SpeedDialModule,
    SplitButtonModule,
    SplitterModule,
    TableModule,
    TabViewModule,
    TagModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TreeModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class PrimeNGModule {}
