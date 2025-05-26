## Custom Hooks
> [useCurrencyInfo.js](src/hooks/useCurrencyInfo.js)

## UseID Hook
useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

```
const id = useId()
```

> [!WARNING]
> Do not call useId to generate keys in a list. Keys should be generated from your data.


## InputBox
- remember `key` in loops in react becasue without it will downgrade performance

```
{currencyOptions.map((currency) => (
                         <option key={currency} value={currency}>
                            {currency}
                        </option>
                       ))}

```

### Assignment
1. Change UI
2. Options bar
y


[currencyAPI](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json)

