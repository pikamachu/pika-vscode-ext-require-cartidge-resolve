import DefaultDefinitionProvider from "./DefaultDefinitionProvider";
import {DefinitionConfig, DefinitionItem} from "./BaseDefinitionProvider";

const requireDefinitionConfig: DefinitionConfig = { 
  wordRangeRegex: /('|")[\*~][a-zA-Z0-9_\/\*\.]*('|")/,
  identifySimpleSearch: "cartridge",
  identifyRegex: /(require\s*\(\s*)(['"])[\*~]\/cartridge(.*?[^\\])\2\s*\)/,
  identifyMatchPathPosition: 4,
  identifyType: "require"
};

/**
 * Definition Provider for scripts in "require" statements.
 * @example
 * var collections = require('unicodeEscape('*')/cartridge/scripts/util/collections');
 * 
 */
export default class RequireDefinitionProvider extends DefaultDefinitionProvider {
  public constructor(extensionConfig = {}, definitionConfig = requireDefinitionConfig) {
    super(extensionConfig, definitionConfig);
    super._providerClass = "Require";
  }
}
