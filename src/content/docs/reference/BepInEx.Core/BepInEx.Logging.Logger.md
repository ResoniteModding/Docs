---
title: Logger Class
slug: reference/bepinex.logging.logger
sidebar:
  label: Logger
---

## Definition

Handles pub-sub event marshalling across all log listeners and sources.

```csharp title="C#"
public static class Logger
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Properties

### ListenedLogLevels

Log levels that are currently listened to by at least one listener.

```csharp title="C#"
public static LogLevel ListenedLogLevels { get; }
```

### Listeners

Collection of all log listeners that receive log events.

```csharp title="C#"
public static ICollection<ILogListener> Listeners { get; }
```

### Sources

Collection of all log source that output log events.

```csharp title="C#"
public static ICollection<ILogSource> Sources { get; }
```

## Methods

### CreateLogSource(string)

Creates a new log source with a name and attaches it to [Sources](../bepinex.logging.logger.sources/#sources/).

```csharp title="C#"
public static ManualLogSource CreateLogSource(string sourceName)
```

#### Parameters

`sourceName` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the log source to create.

#### Returns

[ManualLogSource](../bepinex.logging.manuallogsource/)  
An instance of [ManualLogSource](../bepinex.logging.manuallogsource/) that allows to write logs.
