# Headless 

*Headless UI* is a term for libraries and utilities that provide the logic, state, processing and API for UI elements and interactions, but *do not provide markup styles, or pre-built implementations*. Scratching your head yet? Headless UI has a few main goals:

The hardest parts of build complex UIs usually revolve around state, events, side-effects, data computation/management. By removing these concerns from the markuo, styles and implementation details, our logic and components can be more modular and reusable.

Building UI is a very branded and custom experience, even if that means choosing a design system or adhering to a design spec. To support this custom experience, component-based UI libraries need to support a massive (and seemingly endless) API surface around makruo and style customization. Headless UI lbraries decouple your logic from your UI.

When you use a headless UI library, the complex task of *data-processing, state-management, and business logic* are handled for you, leaving you worry about higher cardinality decisions that differ across implementations and use cases.

## Component-based libraries vs Headless libraries

in the ecosystem of table/datagrid libraries, there are tow main categories:

- Component-based table libraries
- Headless table libraries

## Which kind of table library should i use?

Each approach has subtle tradeoffs. Understading theses subtleties will help you make the right decision for your application and team.

## Component-based Table libraries

Component-based table libraries will typically supply you with a feature-rich drop-in solution and ready-to-use components/markup complete with style/theming.

#### Pros:

- Ship with erady-to-use markup/styles
- Little setup required 
- Turn-key experience

#### Cons: 
- Less control over markup
- Custom styes are typically theme-based 
- Larger bundle-sizes 
- Highly coupled to framework adapters and platforms

*If you want a ready-to-use table and design/bundle-size are not hard requirements*, then you should consider using a component-based table library.

There are a olot of component-based table libraries out there, but we belive *AG GRID* is the gold standard and is by far our favorite grid-sibling.

## Headless Table libraries

Headless table libraries will typically supply you with functions, state, utilities and event listeners to build your own table markup or attach to existing table markups. 

#### Pross 

- Full control over markup and styles 
- Supports all styling patters (CSS, CSS-in-JS, libraries, etc)
- Smaller bundle-sizes
- Portable . Run anywhere JS runs!

#### Cons:

- More setup required
- No markup, styles or themes provided 

*If you want a lighter-weight table or full control over the design*, then you should consider using a headless table library.


