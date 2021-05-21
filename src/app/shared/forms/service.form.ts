import { FormArray, FormControl, FormGroup } from "@angular/forms";

export function getServiceForm(): FormGroup{
    return new FormGroup({
        id: new FormControl(), //service id
        name: new FormControl(),
        category: new FormControl(),
        description: new FormControl(),
        serviceType: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        hasStarted: new FormControl(),
        isServiceEnabled: new FormControl(),
        isStateful: new FormControl(),
        serviceDate: new FormControl(),
        startMode: new FormControl('Manually by the Provider of the Service'),
        state: new FormControl(),
        resources: new FormArray([]),
        notes: new FormArray([])
    });
}