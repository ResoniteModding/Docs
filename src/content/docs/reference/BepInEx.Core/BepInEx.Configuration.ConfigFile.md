---
title: ConfigFile Class
slug: reference/bepinex.configuration.configfile
sidebar:
  label: ConfigFile
---
## Definition

A helper class to handle persistent data. All public methods are thread-safe.

```csharp title="C#"
public class ConfigFile : IDictionary<ConfigDefinition, ConfigEntryBase>, ICollection<KeyValuePair<ConfigDefinition, ConfigEntryBase>>, IEnumerable<KeyValuePair<ConfigDefinition, ConfigEntryBase>>, IEnumerable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

Implements [IDictionary\<ConfigDefinition, ConfigEntryBase\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2/), [ICollection\<KeyValuePair\<ConfigDefinition, ConfigEntryBase\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1/), [IEnumerable\<KeyValuePair\<ConfigDefinition, ConfigEntryBase\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1/), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable/)

## Constructors

### ConfigFile(string, bool)

Create a new config file at the specified config path.

```csharp title="C#"
public ConfigFile(string configPath, bool saveOnInit)
```

#### Parameters

`configPath` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Full path to a file that contains settings. The file will be created as needed.

`saveOnInit` [bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
If the config file/directory doesn't exist, create it immediately.


### ConfigFile(string, bool, BepInPlugin)

Create a new config file at the specified config path.

```csharp title="C#"
public ConfigFile(string configPath, bool saveOnInit, BepInPlugin ownerMetadata)
```

#### Parameters

`configPath` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Full path to a file that contains settings. The file will be created as needed.

`saveOnInit` [bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
If the config file/directory doesn't exist, create it immediately.

`ownerMetadata` [BepInPlugin](../bepinex.bepinplugin/)  
Information about the plugin that owns this setting file.


## Properties

### CoreConfig

```csharp title="C#"
public static ConfigFile CoreConfig { get; }
```

### Entries

All config entries inside

```csharp title="C#"
protected Dictionary<ConfigDefinition, ConfigEntryBase> Entries { get; }
```

### ConfigDefinitions

:::caution[Obsolete]
Use Keys instead
:::
Create a list with all config entries inside of this config file.

```csharp title="C#"
[Obsolete("Use Keys instead")]
public ReadOnlyCollection<ConfigDefinition> ConfigDefinitions { get; }
```

### ConfigFilePath

Full path to the config file. The file might not exist until a setting is added and changed, or [Save()](../bepinex.configuration.configfile.save/#save/) is called.

```csharp title="C#"
public string ConfigFilePath { get; }
```

### SaveOnConfigSet

If enabled, writes the config to disk every time a value is set. If disabled, you have to manually use [Save()](../bepinex.configuration.configfile.save/#save/) or the changes will be lost!

```csharp title="C#"
public bool SaveOnConfigSet { get; set; }
```

### this[ConfigDefinition]

```csharp title="C#"
public ConfigEntryBase this[ConfigDefinition key] { get; }
```

### this[string, string]

```csharp title="C#"
public ConfigEntryBase this[string section, string key] { get; }
```

### Count

Gets the number of elements contained in the [ICollection\<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1/).

```csharp title="C#"
public int Count { get; }
```

### IsReadOnly

Gets a value indicating whether the [ICollection\<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1/) is read-only.

```csharp title="C#"
public bool IsReadOnly { get; }
```

### Keys

Returns the ConfigDefinitions that the ConfigFile contains. <p>Creates a new array when the property is accessed. Thread-safe.</p>

```csharp title="C#"
public ICollection<ConfigDefinition> Keys { get; }
```

### Values

Returns the ConfigEntryBase values that the ConfigFile contains. <p>Creates a new array when the property is accessed. Thread-safe.</p>

```csharp title="C#"
public ICollection<ConfigEntryBase> Values { get; }
```

### GenerateSettingDescriptions

Generate user-readable comments for each of the settings in the saved .cfg file.

```csharp title="C#"
public bool GenerateSettingDescriptions { get; set; }
```

## Methods

### GetEnumerator()

Returns an enumerator that iterates through the collection.

```csharp title="C#"
public IEnumerator<KeyValuePair<ConfigDefinition, ConfigEntryBase>> GetEnumerator()
```

#### Returns

[IEnumerator\<KeyValuePair\<ConfigDefinition, ConfigEntryBase\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1/)  
An enumerator that can be used to iterate through the collection.

### Contains(KeyValuePair<ConfigDefinition, ConfigEntryBase>)

Determines whether the [ICollection\<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1/) contains a specific value.

```csharp title="C#"
public bool Contains(KeyValuePair<ConfigDefinition, ConfigEntryBase> item)
```

#### Parameters

`item` [KeyValuePair\<ConfigDefinition, ConfigEntryBase\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2/)  
The object to locate in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if `item` is found in the [ICollection\<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1/); otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### ContainsKey(ConfigDefinition)

Determines whether the [IDictionary\<TKey, TValue\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2/) contains an element with the specified key.

```csharp title="C#"
public bool ContainsKey(ConfigDefinition key)
```

#### Parameters

`key` [ConfigDefinition](../bepinex.configuration.configdefinition/)  
The key to locate in the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the [IDictionary\<TKey, TValue\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2/) contains an element with the key; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
#### Exceptions

[ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception/)  
`key` is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.


### Add(ConfigDefinition, ConfigEntryBase)

Adds an element with the provided key and value to the [IDictionary\<TKey, TValue\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2/).

```csharp title="C#"
public void Add(ConfigDefinition key, ConfigEntryBase value)
```

#### Parameters

`key` [ConfigDefinition](../bepinex.configuration.configdefinition/)  
The object to use as the key of the element to add.

`value` [ConfigEntryBase](../bepinex.configuration.configentrybase/)  
The object to use as the value of the element to add.

#### Exceptions

[ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception/)  
`key` is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

[ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception/)  
An element with the same key already exists in the [IDictionary\<TKey, TValue\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2/).

[NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception/)  
The [IDictionary\<TKey, TValue\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2/) is read-only.


### Remove(ConfigDefinition)

Removes the element with the specified key from the [IDictionary\<TKey, TValue\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2/).

```csharp title="C#"
public bool Remove(ConfigDefinition key)
```

#### Parameters

`key` [ConfigDefinition](../bepinex.configuration.configdefinition/)  
The key of the element to remove.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the element is successfully removed; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.  This method also returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> if `key` was not found in the original [IDictionary\<TKey, TValue\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2/).
#### Exceptions

[ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception/)  
`key` is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

[NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception/)  
The [IDictionary\<TKey, TValue\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2/) is read-only.


### Clear()

Removes all items from the [ICollection\<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1/).

```csharp title="C#"
public void Clear()
```

#### Exceptions

[NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception/)  
The [ICollection\<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1/) is read-only.


### GetConfigEntries()

:::caution[Obsolete]
Use Values instead
:::
Create an array with all config entries inside of this config file. Should be only used for metadata purposes. If you want to access and modify an existing setting then use `BepInEx.Configuration.ConfigFile.AddSetting``1(BepInEx.Configuration.ConfigDefinition%2c``0%2cBepInEx.Configuration.ConfigDescription)` instead with no description.

```csharp title="C#"
[Obsolete("Use Values instead")]
public ConfigEntryBase[] GetConfigEntries()
```

#### Returns

[ConfigEntryBase[]](../bepinex.configuration.configentrybase/)

### Reload()

Reloads the config from disk. Unsaved changes are lost.

```csharp title="C#"
public void Reload()
```


### Save()

Writes the config to disk.

```csharp title="C#"
public void Save()
```


### GetSetting<T>(ConfigDefinition)

:::caution[Obsolete]
Use ConfigFile[key] or TryGetEntry instead
:::
Access one of the existing settings. If the setting has not been added yet, null is returned. If the setting exists but has a different type than T, an exception is thrown. New settings should be added with `BepInEx.Configuration.ConfigFile.AddSetting``1(BepInEx.Configuration.ConfigDefinition%2c``0%2cBepInEx.Configuration.ConfigDescription)`.

```csharp title="C#"
[Obsolete("Use ConfigFile[key] or TryGetEntry instead")]
public ConfigEntry<T> GetSetting<T>(ConfigDefinition configDefinition)
```

#### Parameters

`configDefinition` [ConfigDefinition](../bepinex.configuration.configdefinition/)  
Section and Key of the setting.

#### Returns

[ConfigEntry\<T\>](../bepinex.configuration.configentry-1/)

### GetSetting<T>(string, string)

:::caution[Obsolete]
Use ConfigFile[key] or TryGetEntry instead
:::
Access one of the existing settings. If the setting has not been added yet, null is returned. If the setting exists but has a different type than T, an exception is thrown. New settings should be added with `BepInEx.Configuration.ConfigFile.AddSetting``1(BepInEx.Configuration.ConfigDefinition%2c``0%2cBepInEx.Configuration.ConfigDescription)`.

```csharp title="C#"
[Obsolete("Use ConfigFile[key] or TryGetEntry instead")]
public ConfigEntry<T> GetSetting<T>(string section, string key)
```

#### Parameters

`section` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Section/category/group of the setting. Settings are grouped by this.

`key` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the setting.

#### Returns

[ConfigEntry\<T\>](../bepinex.configuration.configentry-1/)

### TryGetEntry<T>(ConfigDefinition, out ConfigEntry<T>)

Access one of the existing settings. If the setting has not been added yet, false is returned. Otherwise, true. If the setting exists but has a different type than T, an exception is thrown. New settings should be added with `BepInEx.Configuration.ConfigFile.Bind``1(BepInEx.Configuration.ConfigDefinition%2c``0%2cBepInEx.Configuration.ConfigDescription)`.

```csharp title="C#"
public bool TryGetEntry<T>(ConfigDefinition configDefinition, out ConfigEntry<T> entry)
```

#### Parameters

`configDefinition` [ConfigDefinition](../bepinex.configuration.configdefinition/)  
Section and Key of the setting.

`entry` [ConfigEntry\<T\>](../bepinex.configuration.configentry-1/)  
The ConfigEntry value to return.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### TryGetEntry<T>(string, string, out ConfigEntry<T>)

Access one of the existing settings. If the setting has not been added yet, null is returned. If the setting exists but has a different type than T, an exception is thrown. New settings should be added with `BepInEx.Configuration.ConfigFile.Bind``1(BepInEx.Configuration.ConfigDefinition%2c``0%2cBepInEx.Configuration.ConfigDescription)`.

```csharp title="C#"
public bool TryGetEntry<T>(string section, string key, out ConfigEntry<T> entry)
```

#### Parameters

`section` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Section/category/group of the setting. Settings are grouped by this.

`key` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the setting.

`entry` [ConfigEntry\<T\>](../bepinex.configuration.configentry-1/)  
The ConfigEntry value to return.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### Bind<T>(ConfigDefinition, T, ConfigDescription)

Create a new setting. The setting is saved to drive and loaded automatically. Each definition can be used to add only one setting, trying to add a second setting will throw an exception.

```csharp title="C#"
public ConfigEntry<T> Bind<T>(ConfigDefinition configDefinition, T defaultValue, ConfigDescription configDescription = null)
```

#### Parameters

`configDefinition` [ConfigDefinition](../bepinex.configuration.configdefinition/)  
Section and Key of the setting.

`defaultValue` T  
Value of the setting if the setting was not created yet.

`configDescription` [ConfigDescription](../bepinex.configuration.configdescription/)  
Description of the setting shown to the user and other metadata.

#### Returns

[ConfigEntry\<T\>](../bepinex.configuration.configentry-1/)

### Bind<T>(string, string, T, ConfigDescription)

Create a new setting. The setting is saved to drive and loaded automatically. Each section and key pair can be used to add only one setting, trying to add a second setting will throw an exception.

```csharp title="C#"
public ConfigEntry<T> Bind<T>(string section, string key, T defaultValue, ConfigDescription configDescription = null)
```

#### Parameters

`section` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Section/category/group of the setting. Settings are grouped by this.

`key` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the setting.

`defaultValue` T  
Value of the setting if the setting was not created yet.

`configDescription` [ConfigDescription](../bepinex.configuration.configdescription/)  
Description of the setting shown to the user and other metadata.

#### Returns

[ConfigEntry\<T\>](../bepinex.configuration.configentry-1/)

### Bind<T>(string, string, T, string)

Create a new setting. The setting is saved to drive and loaded automatically. Each section and key pair can be used to add only one setting, trying to add a second setting will throw an exception.

```csharp title="C#"
public ConfigEntry<T> Bind<T>(string section, string key, T defaultValue, string description)
```

#### Parameters

`section` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Section/category/group of the setting. Settings are grouped by this.

`key` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the setting.

`defaultValue` T  
Value of the setting if the setting was not created yet.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Simple description of the setting shown to the user.

#### Returns

[ConfigEntry\<T\>](../bepinex.configuration.configentry-1/)

### AddSetting<T>(ConfigDefinition, T, ConfigDescription)

:::caution[Obsolete]
Use Bind instead
:::
Create a new setting. The setting is saved to drive and loaded automatically. Each definition can be used to add only one setting, trying to add a second setting will throw an exception.

```csharp title="C#"
[Obsolete("Use Bind instead")]
public ConfigEntry<T> AddSetting<T>(ConfigDefinition configDefinition, T defaultValue, ConfigDescription configDescription = null)
```

#### Parameters

`configDefinition` [ConfigDefinition](../bepinex.configuration.configdefinition/)  
Section and Key of the setting.

`defaultValue` T  
Value of the setting if the setting was not created yet.

`configDescription` [ConfigDescription](../bepinex.configuration.configdescription/)  
Description of the setting shown to the user and other metadata.

#### Returns

[ConfigEntry\<T\>](../bepinex.configuration.configentry-1/)

### AddSetting<T>(string, string, T, ConfigDescription)

:::caution[Obsolete]
Use Bind instead
:::
Create a new setting. The setting is saved to drive and loaded automatically. Each section and key pair can be used to add only one setting, trying to add a second setting will throw an exception.

```csharp title="C#"
[Obsolete("Use Bind instead")]
public ConfigEntry<T> AddSetting<T>(string section, string key, T defaultValue, ConfigDescription configDescription = null)
```

#### Parameters

`section` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Section/category/group of the setting. Settings are grouped by this.

`key` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the setting.

`defaultValue` T  
Value of the setting if the setting was not created yet.

`configDescription` [ConfigDescription](../bepinex.configuration.configdescription/)  
Description of the setting shown to the user and other metadata.

#### Returns

[ConfigEntry\<T\>](../bepinex.configuration.configentry-1/)

### AddSetting<T>(string, string, T, string)

:::caution[Obsolete]
Use Bind instead
:::
Create a new setting. The setting is saved to drive and loaded automatically. Each section and key pair can be used to add only one setting, trying to add a second setting will throw an exception.

```csharp title="C#"
[Obsolete("Use Bind instead")]
public ConfigEntry<T> AddSetting<T>(string section, string key, T defaultValue, string description)
```

#### Parameters

`section` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Section/category/group of the setting. Settings are grouped by this.

`key` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the setting.

`defaultValue` T  
Value of the setting if the setting was not created yet.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Simple description of the setting shown to the user.

#### Returns

[ConfigEntry\<T\>](../bepinex.configuration.configentry-1/)

### Wrap<T>(string, string, string, T)

:::caution[Obsolete]
Use Bind instead
:::
Access a setting. Use Bind instead.

```csharp title="C#"
[Obsolete("Use Bind instead")]
public ConfigWrapper<T> Wrap<T>(string section, string key, string description = null, T defaultValue = default)
```

#### Parameters

`section` [string](https://learn.microsoft.com/dotnet/api/system.string/)  

`key` [string](https://learn.microsoft.com/dotnet/api/system.string/)  

`description` [string](https://learn.microsoft.com/dotnet/api/system.string/)  

`defaultValue` T  

#### Returns

[ConfigWrapper\<T\>](../bepinex.configuration.configwrapper-1/)

### Wrap<T>(ConfigDefinition, T)

:::caution[Obsolete]
Use Bind instead
:::
Access a setting. Use Bind instead.

```csharp title="C#"
[Obsolete("Use Bind instead")]
public ConfigWrapper<T> Wrap<T>(ConfigDefinition configDefinition, T defaultValue = default)
```

#### Parameters

`configDefinition` [ConfigDefinition](../bepinex.configuration.configdefinition/)  

`defaultValue` T  

#### Returns

[ConfigWrapper\<T\>](../bepinex.configuration.configwrapper-1/)

## Events

### ConfigReloaded

An event that is fired every time the config is reloaded.

```csharp title="C#"
public event EventHandler ConfigReloaded
```

#### Event Type

[EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler/)
### SettingChanged

Fired when one of the settings is changed.

```csharp title="C#"
public event EventHandler<SettingChangedEventArgs> SettingChanged
```

#### Event Type

[EventHandler\<SettingChangedEventArgs\>](https://learn.microsoft.com/dotnet/api/system.eventhandler-1/)