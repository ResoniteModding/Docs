---
title: LogLevel Enum
slug: reference/bepinex.logging.loglevel
sidebar:
  label: LogLevel
---

## Definition

The level, or severity of a log entry.

```csharp title="C#"
[Flags]
public enum LogLevel
```

## Fields

### None

No level selected.

```csharp title="C#"
None = 0
```

### Fatal

A fatal error has occurred, which cannot be recovered from.

```csharp title="C#"
Fatal = 1
```

### Error

An error has occured, but can be recovered from.

```csharp title="C#"
Error = 2
```

### Warning

A warning has been produced, but does not necessarily mean that something wrong has happened.

```csharp title="C#"
Warning = 4
```

### Message

An important message that should be displayed to the user.

```csharp title="C#"
Message = 8
```

### Info

A message of low importance.

```csharp title="C#"
Info = 16
```

### Debug

A message that would likely only interest a developer.

```csharp title="C#"
Debug = 32
```

### All

All log levels.

```csharp title="C#"
All = Fatal | Error | Warning | Message | Info | Debug
```
