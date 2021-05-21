import { FormControl, FormGroup } from "@angular/forms";

export function getNoteForm(): FormGroup{
    return new FormGroup({
        text: new FormControl()
    });
}