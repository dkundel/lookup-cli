<!-- BADGES:START -->

[![Build Status](https://img.shields.io/travis/undefined/undefined.svg?branch=master&style=flat-square)](https://travis-ci.org/undefined/undefined)[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)[![Code of Conduct](https://img.shields.io/badge/%F0%9F%92%96-Code%20of%20Conduct-ff69b4.svg?style=flat-square)](CODE_OF_CONDUCT.md)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

<!-- BADGES:END -->

# lookup-cli

> A CLI to lookup phone numbers with the Twilio Lookup API

## Usage

Make sure you have a Twilio account and have the credentials set as `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` saved in your environment variables.

```bash
npm install -g lookup-cli
lookup +18312161886

# Or
npx lookup-cli +18312161886
```

## Contributing

Contributions are always welcomed! Feel free to create an [issue](/issues) or submit a [pull request](/pull) for any changes.

### How to create a PR

If your change is in one of the Markdown files, the easiest path might be to use GitHub's ["Edit File"](https://help.github.com/articles/editing-files-in-your-repository/) functionality. For any code-related changes you want to:

1.  Fork the repository
2.  Clone your fork & install dependencies on your computer:

```bash
git clone git@github.com:YOUR_GITHUB_NAME/lookup-cli.git
cd lookup-cli
npm install
```

3.  Create a branch for your changes
4.  Make changes
5.  Run `npm test` before commiting.
6.  Create a Pull Request

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/1505101?v=4" width="100px;"/><br /><sub><b>Dominik Kundel</b></sub>](https://dkundel.com)<br />[💻](https://github.com/dkundel/lookup-cli/commits?author=dkundel "Code") [🎨](#design-dkundel "Design") [🤔](#ideas-dkundel "Ideas, Planning, & Feedback") [👀](#review-dkundel "Reviewed Pull Requests") [📖](https://github.com/dkundel/lookup-cli/commits?author=dkundel "Documentation") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT
