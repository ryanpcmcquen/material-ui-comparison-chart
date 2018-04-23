To move this into prod:

- Remove the images from the `CompareCheckbox` component. Also remove the `productData` property from the `connect` function for `CompareCheckbox`.
- Change references to point to `@sur-la-table/slt-ui` instead of `material-ui`.
- Reference the reducer in the main `combineReducer` function.
