import type { InjectionKey, Ref } from "vue";
import type { VApp } from "vuetify/components/VApp";

import type { Subject } from "rxjs";

import type { IEventApp, TOrNoValue } from "~/types";

export const TOKEN_foo = <InjectionKey<string>>Symbol();
export const TOKEN_appEmitter$ = <InjectionKey<Subject<IEventApp>>>Symbol();
export const TOKEN_VAPP = <
  InjectionKey<Ref<TOrNoValue<InstanceType<typeof VApp>>>>
>Symbol();
