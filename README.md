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

const minValidatedValue: ValidatorReturnsType = new SimpleValidator().minLenghtValidate(1,'test error message')('12313')
const maxValidatedValue: ValidatorReturnsType = new SimpleValidator().maxLenghtValidate(1,'test error message')('12313')
const requiredValidatedValue: ValidatorReturnsType = new SimpleValidator().requiredValidator('test error message')('')
```

#### PatternValidator usage

```javascript
import { PatternValidator } from "@wildberries/validators";

const numberValidatedValue: ValidatorReturnsType = new PatternValidator().numbersOnly('test error message')('12313')
const cyrillicValidatedValue: ValidatorReturnsType = new PatternValidator().cyrillicsOnly('test error message')('12313')
const decimalValidatedValue: ValidatorReturnsType = new PatternValidator().decimalNumbers('test error message')('12313')
const emailValidatedValue: ValidatorReturnsType = new PatternValidator().email('test error message')('12313')
const phoneValidatedValue: ValidatorReturnsType = new PatternValidator().phoneNumber('test error message')('12313')
const dateValidatedValue: ValidatorReturnsType = new PatternValidator().dateOnly('test error message')('12313')

const customValidatedValue: ValidatorReturnsType = new PatternValidator().customPatternValidate(
    {
        pattern:/^[foo]$/,
        errorTextValue:'not'
    }
)('foo')
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
        simpleValidator.requiredValidator('test error message'),
        simpleValidator.maxLenghtValidate(13, 'test error message'),
        patternValidator.phoneNumber('test error message'),
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
        </form>
    )}
/>
```








