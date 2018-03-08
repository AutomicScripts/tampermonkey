# tampermonkey
Tampermonkey scripts for Automic Web Interface

## AWIcolors
Colors the Automic Web Interface Tabs according to the settings made. Choose one color per environment and client. See the following "Config" section for an example.

**Config. :**

Define colors via script variable AEEnvs. e.g.

```javascript
var AEEnvs = {
 'TEST': {'0': 'greenyellow','10': 'green'},
 'DEV': {'0': 'yellow','10': '#DDDDDD'},
 'PROD': {'0': 'red','10': '#000000'}
};
```
