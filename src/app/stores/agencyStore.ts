import { getState, patchState, signalStore, watchState, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { computed, effect, inject, resource } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const AgencyStoreKey = "agency"



type AgencyState = {
  roster: any[];
  initialized: boolean,
};

const initState: AgencyState = {
    roster: [],
    initialized: false,
};

export const AgencyStore = signalStore(
  { providedIn: 'root' },
  withState(initState),
  withProps((store, http = inject(HttpClient)) => {
    return {
        _agencyResource: resource<any[], string>({
            request: store.roster
        }),
    };
  }),
  withComputed((store) => ({
    completedArray: computed(() => {
        return store.roster().filter((x) => x.completed)
    }),
    incompleteArray: computed(() => {
        return store.roster().filter((x) => !x.completed)
    })
  })),
  withMethods((store) => ({
    addAgency(newAgency: string) {
        patchState(store, {
            roster: [{
                description: newAgency,
                id: parseInt(Date.now().toString()),
                completed: false,
            }, ...store.roster()]
        })
    },
    removeAgency(item: any) {
        patchState(store, {
            roster: store.roster()
            .filter((i: any) => i !== item)
        });
    }
    ,
    toggleAgency(id: number) {
        patchState(store, {
            roster: store.roster()
            .map((x) => {
                if (x.id === id) {
                    return {
                        ...x,
                        completed: !x.completed
                    }
                }
                return x
            })
        })
    }
  })),
  withHooks({
    onInit(store) {
        // if already in storage dont set to new array:
        const exists = JSON.parse(
            sessionStorage.getItem(AgencyStoreKey) || '[]'
        );

        patchState(store, {
            roster: exists
        })

        watchState(store, ({roster}) => {
            console.log(`oninit watcher: JSON.stringify(state)`);
            sessionStorage.setItem(
                        AgencyStoreKey,
                        JSON.stringify(roster)
                    )
        })
    },
  }),
);

// watchstate occurs in beginning and runs after every stat change, effect occurs after single/multiple state change (waits for all changes before running)
// here is the store
