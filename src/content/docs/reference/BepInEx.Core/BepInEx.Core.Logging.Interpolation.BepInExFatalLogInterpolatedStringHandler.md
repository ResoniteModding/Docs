---
title: BepInExFatalLogInterpolatedStringHandler Class
slug: reference/bepinex.core.logging.interpolation.bepinexfatalloginterpolatedstringhandler
sidebar:
  label: BepInExFatalLogInterpolatedStringHandler
---

## Definition

Interpolated string handler for BepInEx [Logger](../bepinex.logging.logger/). This allows to conditionally skip logging certain messages and speed up logging in certain places.

```csharp title="C#"
public class BepInExFatalLogInterpolatedStringHandler : BepInExLogInterpolatedStringHandler
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [BepInExLogInterpolatedStringHandler](../bepinex.core.logging.interpolation.bepinexloginterpolatedstringhandler/)

## Remarks

The class isn't meant to be constructed manually. Instead, use `BepInEx.Logging.ManualLogSource.Log(BepInEx.Logging.LogLevel%2cBepInEx.Core.Logging.Interpolation.BepInExLogInterpolatedStringHandler)` with string interpolation.

## Constructors

### BepInExFatalLogInterpolatedStringHandler(int, int, out bool)

```csharp title="C#"
public BepInExFatalLogInterpolatedStringHandler(int literalLength, int formattedCount, out bool isEnabled)
```

#### Parameters

`literalLength` [int](https://learn.microsoft.com/dotnet/api/system.int32/)

`formattedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32/)

`isEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean/)
