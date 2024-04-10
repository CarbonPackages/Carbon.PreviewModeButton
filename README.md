[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

# Carbon.PreviewModeButton

Toggle preview mode with a button in the Neos CMS backend.

## Installation

`Carbon.PreviewModeButton` is available via packagist.
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
          # The name of the preview mode
          teaserView:
            # If a document is this node type or has this supertype, show the button.
            # Otherwise it will be hidden
            nodeTypeName: "Foo.Bar:Mixin.TeaserDocument"
            # Optional. Fallback to 'fas fa-pencil'
            icon: "fas fa-images"
            # Add `aria-label` and `title` to the button. Will be translated, but can also be a plain text
            label: "Foo.Bar:Backend.Main:editPreviewModes.teaserView"
```

[packagist]: https://packagist.org/packages/carbon/previewmodebutton
[latest stable version]: https://poser.pugx.org/carbon/previewmodebutton/v/stable
[total downloads]: https://poser.pugx.org/carbon/previewmodebutton/downloads
[license]: https://poser.pugx.org/carbon/previewmodebutton/license
[github forks]: https://img.shields.io/github/forks/CarbonPackages/Carbon.PreviewModeButton.svg?style=social&label=Fork
[github stars]: https://img.shields.io/github/stars/CarbonPackages/Carbon.PreviewModeButton.svg?style=social&label=Stars
[github watchers]: https://img.shields.io/github/watchers/CarbonPackages/Carbon.PreviewModeButton.svg?style=social&label=Watch
[fork]: https://github.com/CarbonPackages/Carbon.PreviewModeButton/fork
[stargazers]: https://github.com/CarbonPackages/Carbon.PreviewModeButton/stargazers
[subscription]: https://github.com/CarbonPackages/Carbon.PreviewModeButton/subscription
