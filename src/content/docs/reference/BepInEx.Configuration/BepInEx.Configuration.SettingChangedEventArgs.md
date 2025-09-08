---
title: SettingChangedEventArgs Class
slug: reference/bepinex.configuration.settingchangedeventargs
sidebar:
  label: SettingChangedEventArgs
---
## Definition

Arguments for events concerning a change of a setting.

```csharp title="C#"
public sealed class SettingChangedEventArgs : EventArgs
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs/)

## Constructors

### SettingChangedEventArgs(ConfigEntryBase)

```csharp title="C#"
public SettingChangedEventArgs(ConfigEntryBase changedSetting)
```

#### Parameters

`changedSetting` [ConfigEntryBase](../bepinex.configuration.configentrybase/)  


## Properties

### ChangedSetting

Setting that was changed

```csharp title="C#"
public ConfigEntryBase ChangedSetting { get; }
```