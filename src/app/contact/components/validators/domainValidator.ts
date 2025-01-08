import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createDomainValidator(domains: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.toLowerCase();
    if (!value) return null;
    const matches = domains.some(domain => value.indexOf('@' + domain) > -1);
    return matches ? { invalidEmailDomain: true } : null;
  }
}
