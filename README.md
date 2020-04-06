# @wildberries/validators

## Sollution for validations

### Benefits:

- Works isomorphic (node and browser environments)
- Provides validators for simple values and simple pattern based
- Provides functions for validations for react-final-form
- Provides function to validate values with custom patterns

## Examples of usage

#### installation

```javascript
npm install @wildberries/validators
```

#### SimpleValidator usage

```javascript
import { SimpleValidator } from "@wildberries/validators";

const minValidatedValue: ValidatorReturnsType = new SimpleValidator().minLenghtValidate(1)('12313')
const maxValidatedValue: ValidatorReturnsType = new SimpleValidator().maxLenghtValidate(1)('12313')
const requiredValidatedValue: ValidatorReturnsType = new SimpleValidator().requiredValidator('')
```

#### PatternValidator usage

```javascript
import { PatternValidator } from "@wildberries/validators";

const numberValidatedValue: ValidatorReturnsType = new PatternValidator().numbersOnly('12313')
const cyrillicValidatedValue: ValidatorReturnsType = new PatternValidator().cyrillicsOnly('12313')
const decimalValidatedValue: ValidatorReturnsType = new PatternValidator().decimalNumbers('12313')
const emailValidatedValue: ValidatorReturnsType = new PatternValidator().email('12313')
const phoneValidatedValue: ValidatorReturnsType = new PatternValidator().phoneNumber('12313')
const dateValidatedValue: ValidatorReturnsType = new PatternValidator().dateOnly('12313')

const customValidatedValue: ValidatorReturnsType = new PatternValidator().customPatternValidate(
    {
        value:'foo',
        pattern:/^[foo]$/,
        errorTextValue:'not'
    }
)
```

#### Custom validation usage

```javascript
import { getIsValueMatchPattern } from "@wildberries/validators";

const isValueMatch: boolean = getIsValueMatchPattern(
    {
        value:'foo',
        pattern:/^[foo]$/
    }
)

```

#### Validators with React-Final-Form usage

```javascript
import { Form } from 'react-final-form';
import { FormTextInput } from '@/components/form-text-input'
import { PatternValidator, composeValidators, SimpleValidator } from "@wildberries/validators";

const simpleValidator = new SimpleValidator()
const patternValidator = new PatternValidator()

const fieldValidations: string = composeValidators(
    [
        simpleValidator.requiredValidator,
        simpleValidator.maxLenghtValidate(13),
        patternValidator.phoneNumber,
    ]
),

<Form
    onSubmit={onSubmit}
    initialValues={initialValues}
    render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={cn('Example-form')}>
            <div className={cn('Example-form__button-container')}>
                <Field
                    name={name}
                    component={FormTextInput}
                    validate={fieldValidations}
                />
            </div>
            <div className={cn('Example-form__button-container')}>
                <Button
                    text={buttonText}
                    variant="main"
                    size="big"
                    type="submit"
                />
            </div>
        </form>
    )}
/>
```








