{
  "type": "radar",
  "data": {
    "labels": ["Sports", "Leadership skills", "Integrity", "Sharing", "Sacrifice"],
    "datasets": [{
      "label": "John Ko's Scores",
      "data": [3, 5, 5, 6, 7],
      "backgroundColor": "rgba(255, 99, 132, 0.2)",
      "borderColor": "rgba(255, 99, 132, 1)",
      "pointBackgroundColor": [
        "rgba(255, 99, 132, 1)", // Sports: Red
        "rgba(54, 162, 235, 1)", // Leadership skills: Blue
        "rgba(54, 162, 235, 1)", // Integrity: Blue
        "rgba(75, 192, 192, 1)", // Sharing: Green
        "rgba(255, 205, 86, 1)"  // Sacrifice: Yellow
      ],
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 205, 86, 1)"
      ],
      "borderWidth": 2
    }]
  },
  "options": {
    "scales": {
      "r": {
        "angleLines": {
          "color": "rgba(128, 128, 128, 0.5)"
        },
        "grid": {
          "color": "rgba(128, 128, 128, 0.5)"
        },
        "pointLabels": {
          "color": "#ffffff",
          "font": {
            "size": 14
          }
        },
        "ticks": {
          "color": "#ffffff",
          "backdropColor": "rgba(0, 0, 0, 0.75)"
        },
        "min": 0,
        "max": 10
      }
    },
    "plugins": {
      "legend": {
        "labels": {
          "color": "#ffffff",
          "font": {
            "size": 14
          }
        }
      },
      "title": {
        "display": true,
        "text": "John Ko's Performance Scores",
        "color": "#ffffff",
        "font": {
          "size": 16
        }
      }
    }
  }
}
