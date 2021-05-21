import { FormControl, FormGroup } from "@angular/forms";

export function getResourceForm(): FormGroup{
    return new FormGroup({
        id: new FormControl(),
        name: new FormControl()
    });
}