---
title: BepInEx.Configuration
slug: reference/bepinex.configuration
sidebar:
  order: 0
---
## Classes

| | |
| --- | --- |
| [AcceptableValueBase](../bepinex.configuration.acceptablevaluebase/) | Base type of all classes representing and enforcing acceptable values of config settings. |
| [AcceptableValueList<T>\<T\>](../bepinex.configuration.acceptablevaluelist-1/) | Specify the list of acceptable values for a setting. |
| [AcceptableValueRange<T>\<T\>](../bepinex.configuration.acceptablevaluerange-1/) | Specify the range of acceptable values for a setting. |
| [ConfigDefinition](../bepinex.configuration.configdefinition/) | Section and key of a setting. Used as a unique key for identification within a [ConfigFile](../bepinex.configuration.configfile/). The same definition can be used in multiple config files, it will point to different settings then. |
| [ConfigDescription](../bepinex.configuration.configdescription/) | Metadata of a [ConfigEntryBase](../bepinex.configuration.configentrybase/). |
| [ConfigEntry<T>\<T\>](../bepinex.configuration.configentry-1/) | Provides access to a single setting inside of a [ConfigFile](../bepinex.configuration.configfile/). |
| [ConfigEntryBase](../bepinex.configuration.configentrybase/) | Container for a single setting of a [ConfigFile](../bepinex.configuration.configfile/). Each config entry is linked to one config file. |
| [ConfigFile](../bepinex.configuration.configfile/) | A helper class to handle persistent data. All public methods are thread-safe. |
| [ConfigWrapper<T>\<T\>](../bepinex.configuration.configwrapper-1/) | Provides access to a single setting inside of a [ConfigFile](../bepinex.configuration.configfile/). |
| [SettingChangedEventArgs](../bepinex.configuration.settingchangedeventargs/) | Arguments for events concerning a change of a setting. |
| [TomlTypeConverter](../bepinex.configuration.tomltypeconverter/) | Serializer/deserializer used by the config system. |
| [TypeConverter](../bepinex.configuration.typeconverter/) | A serializer/deserializer combo for some type(s). Used by the config system. |