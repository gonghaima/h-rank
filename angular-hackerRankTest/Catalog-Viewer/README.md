# Catalog Viewer

## Environment 

- Angular CLI Version: 15.2.8
- Angular Core Version: 15.2.8
- Node Version: v18 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/mllhJWhWckgDu7PqJo6HVw/catalog-viewer-new.gif)

## Functionality Requirements

Complete a partially completed Angular catalog viewer application. Certain core Angular functionalities have already been implemented. Complete the application as shown below in order to pass all the unit tests.

The application has 2 components:

*   The Viewer component, which displays the selected product in a large size.
*   The Thumbs component, which presents a full list of product thumbnails. The list of images is passed to the Thumbs component as props.

The application has the following functionalities:

*   Initially, the catalog displays the first image in the Viewer.
*   Clicking on the _previous_ or _next_ button displays the previous or next image respectively. The thumbnail list is circular:
    *   Clicking the _next_ button when the last image is showing should display the first image.
    *   Clicking the _previous_ button when the first image is showing should display the last image.
*   Clicking on any thumbnail loads the appropriate image in the Viewer.
*   The checkbox with the label "Start Slide Show" has the following features:
    *   When checked, starts the automatic display of images in the Viewer, beginning with the currently displayed image and cycling to the next every 3 seconds
    *   When unchecked, stops the automatic cycling of images
    *   During cycling, the user can interact as before (click any thumbnail or the _next_ or _previous_ buttons), after which cycling continues from that image

## Testing Requirements

The following data-test-id attributes are required in the component for the tests to pass:

*   The Viewer component should have the data-test-id attribute 'catalog-view'.
*   The _previous_ button should have the data-test-id attribute 'prev-slide-btn'.
*   The _next_ button should have the data-test-id attribute 'next-slide-btn'.
*   The thumbnail buttons should have the data-test-id attributes 'thumb-button-0', 'thumb-button-1', 'thumb-button-2', and 'thumb-button-3'.
*   The "Start Slide Show" checkbox should have the data-test-id attribute 'toggle-slide-show-button'.

Please note that the component has the above data-test-id attributes for test cases and certain classes and ids for rendering purposes. They should not be changed.

## Project Specifications

**Read-only Files**
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
 npm start
```
- install: 
```bash
 npm install
```
- test: 
```bash
 npm test
```