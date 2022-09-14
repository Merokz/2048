function getTileColor(value) {
    switch (value) {
      case 2:
        return "#eee4da";
        break;
      case 4:
        return "#ede0c8";
        break;
      case 8:
        return "#f2b179";
        break;
      case 16:
        return "#f59563";
        break;
      case 32:
        return "#f67c5f";
        break;
      case 64:
        return "#f65e3b";
        break;
      case 128:
        return "#edcf72";
        break;
      case 256:
        return "#edcc61";
        break;
      case 512:
        return "#edc850";
        break;
      case 1024:
        return "#edc53f";
        break;
      case 2048:
        return "#edc22e";
        break;
      default:
        return "#3c3a32";
        break;
    }
  }