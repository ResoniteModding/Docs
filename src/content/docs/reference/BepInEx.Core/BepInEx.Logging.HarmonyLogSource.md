---
title: HarmonyLogSource Class
slug: reference/bepinex.logging.harmonylogsource
sidebar:
  label: HarmonyLogSource
---

## Definition

```csharp title="C#"
public class HarmonyLogSource : ILogSource, IDisposable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

Implements [ILogSource](../bepinex.logging.ilogsource/), [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable/)

## Constructors

### HarmonyLogSource()

```csharp title="C#"
public HarmonyLogSource()
```

## Properties

### SourceName

Name of the log source.

```csharp title="C#"
public string SourceName { get; }
```

## Methods

### Dispose()

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp title="C#"
public void Dispose()
```

## Events

### LogEvent

Event that sends the log message. Call `System.EventHandler.Invoke(System.Object%2cSystem.EventArgs)` to send a log message.

```csharp title="C#"
public event EventHandler<LogEventArgs> LogEvent
```

#### Event Type

[EventHandler\<LogEventArgs\>](https://learn.microsoft.com/dotnet/api/system.eventhandler-1/)
