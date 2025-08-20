---
title: BepInProcess Class
slug: reference/bepinex.bepinprocess
sidebar:
  label: BepInProcess
---
## Definition

This attribute specifies which processes this plugin should be run for. Not specifying this attribute will load the plugin under every process.

```csharp title="C#"
[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
public class BepInProcess : Attribute
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute/)

## Constructors

### BepInProcess(string)

```csharp title="C#"
public BepInProcess(string ProcessName)
```

#### Parameters

`ProcessName` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The name of the process that this plugin will run under.


## Properties

### ProcessName

The name of the process that this plugin will run under.

```csharp title="C#"
public string ProcessName { get; protected set; }
```