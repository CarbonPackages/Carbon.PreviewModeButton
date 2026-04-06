# Carbon.PreviewModeButton

Toggle preview mode with a button in the Neos CMS backend.

## Installation

`Carbon.PreviewModeButton` is available via [packagist].
Run the following command in your site package

```bash
composer require --no-update carbon/previewmodebutton
```

Then run `composer update` in your project root.

## Configuration

To add a button into the panel add a configuration like this:

```yaml
Neos:
  Neos:
    Ui:
      frontendConfiguration:
        "Carbon.PreviewMode:Button":
          # If you set a view mode to true, it will fallback to Neos.Neos:Document and will have no custom icon or label
          rawContent: true

          # The name of the preview mode
          teaserView:
            # If a document is this node type or has this supertype, show the button. Otherwise it will be hidden
            # Defaults to 'Neos.Neos:Document'
            nodeTypeName: "Foo.Bar:Mixin.TeaserDocument"
            # Set the icon. Defaults to 'fas fa-pencil'
            icon: "fas fa-images"
            # Add `aria-label` and `title` to the button. Will be translated, but can also be a plain text
            label: "Foo.Bar:Backend.Main:editPreviewModes.teaserView"
            # Sets the position. Defaults to 'start'
            position: "start 1"
```

[packagist]: https://packagist.org/packages/carbon/previewmodebutton
