import {
    renderValidateRules,
    required,
    maxLength15,
    maxLength,
    number,
    minValue18,
    minValue,
    email} from './FieldValidationRules'
import {RenderTextField} from './FieldRender/RenderTextField'
import {RenderLongTextField} from './FieldRender/RenderLongTextField'
import {RenderDateTimePickerField} from './FieldRender/RenderDateTimePickerField'
import {RenderDropdownListField} from './FieldRender/RenderDropdownListField'
import {RenderDropzoneField} from './FieldRender/RenderDropzoneField'
import {RenderMultiselectField} from './FieldRender/RenderMultiselectField'
import {RenderRatingField} from './FieldRender/RenderRatingField'
import {RenderSelectListField} from './FieldRender/RenderSelectListField'
import {RenderStatementField} from './FieldRender/RenderStatementField'
import {RenderAutoCompleteAddressField} from './FieldRender/RenderAutoCompleteAddressField'

export const view = {
    RenderTextField,
    RenderLongTextField,
    RenderDateTimePickerField,
    RenderDropdownListField,
    RenderDropzoneField,
    RenderMultiselectField,
    RenderRatingField,
    RenderSelectListField,
    RenderStatementField,
    RenderAutoCompleteAddressField
}
export const validationRules = {
    renderValidateRules,
    required,
    maxLength15,
    maxLength,
    number,
    minValue18,
    minValue,
    email
}