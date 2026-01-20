// General helper functions

export const getDegreeLabel = (degree: 0 | 1 | 2 | 3): string => {
  const labels = {
    0: 'Direct Contact',
    1: '1 Connection',
    2: '2 Connections',
    3: '3 Connections',
  };
  return labels[degree];
};

export const getDegreeColor = (degree: 0 | 1 | 2 | 3): string => {
  const colors = {
    0: '#4CAF50',
    1: '#2196F3',
    2: '#9C27B0',
    3: '#FF9800',
  };
  return colors[degree];
};

export const timeAgo = (date: Date): string => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + 'y ago';

  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + 'mo ago';

  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + 'd ago';

  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + 'h ago';

  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + 'm ago';

  return 'Just now';
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
