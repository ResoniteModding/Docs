---
title: Platform Enum
slug: reference/bepinex.core.platform
sidebar:
  label: Platform
---
## Definition

Generic platform enum.

```csharp title="C#"
[Flags]
public enum Platform
```


## Fields

### OS

Bit applied to all OSes (Unknown, Windows, MacOS, ...).

```csharp title="C#"
OS = 1
```

### Bits64

On demand 64-bit platform bit.

```csharp title="C#"
Bits64 = 2
```

### NT

Applied to all NT and NT-oid platforms (Windows).

```csharp title="C#"
NT = 4
```

### Unix

Applied to all Unix and Unix-oid platforms (macOS, Linux, ...).

```csharp title="C#"
Unix = 8
```

### ARM

On demand ARM platform bit.

```csharp title="C#"
ARM = 65536
```

### Wine

On demand Wine bit. DON'T RELY ON THIS.

```csharp title="C#"
Wine = 131072
```

### Unknown

Unknown OS.

```csharp title="C#"
Unknown = 17
```

### Windows

Windows, using the NT kernel.

```csharp title="C#"
Windows = 37
```

### MacOS

macOS, using the Darwin kernel.

```csharp title="C#"
MacOS = 73
```

### Linux

Linux.

```csharp title="C#"
Linux = 137
```

### Android

Android, using the Linux kernel.

```csharp title="C#"
Android = 393
```

### iOS

iOS, sharing components with macOS.

```csharp title="C#"
iOS = 585
```