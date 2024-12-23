# react-dayjs

React component for the [dayjs][dayjs] date library.

![npm](https://img.shields.io/npm/v/react-dayjs.svg?color=blue&style=flat-square) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/startupquickstart/react-dayjs/blob/master/LICENSE.md)

- [react-dayjs](#react-dayjs)
  - [Installing](#installing)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
  - [Contributing](#contributing)
  - [License](#license)


## Installing

Use npm to install `react-dayjs` as well as its peer dependency, `dayjs`.

```bash
npm install --save dayjs @startupquickstart/react-dayjs
```

Then, import the package into your React project:

```jsx
import React from 'react';
import DayJS from '@startupquickstart/react-dayjs';

export default class Application extends React.Component {
    ...
}
```

## Quick Start
Add the `DayJS` component to a component:

```jsx
import React from 'react';
import DayJS from '@startupquickstart/react-dayjs';

export default class MyComponent extends React.Component {
    render() {
        const date = "2000-01-31T12:59-0500";
        return (
            <DayJS>{ date }</DayJS>
        );
    }
}
```

This will output:

```html
<time>2000-01-31T11:59:00-05:00</time>
```

## Documentation

Read [DOCUMENTATION.md][documentation] to view the technical details of the component and its props.

## Contributing

Interested in contributing? Read [CONTRIBUTING.md][contributing] to learn more.

## License

This software is released under the MIT license. See [LICENSE.md][license] for more details.

[contributing]: https://github.com/startupquickstart/react-dayjs/blob/master/CONTRIBUTING.md
[dayjs]: https://github.com/xx45/dayjs
[documentation]: https://github.com/startupquickstart/react-dayjs/blob/master/DOCUMENTATION.md
[license]: https://github.com/startupquickstart/react-dayjs/blob/master/LICENSE.md
