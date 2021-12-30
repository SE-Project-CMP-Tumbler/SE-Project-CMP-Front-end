pipeline {
  agent any
  stages {
//     stage('Debug Info') {
//       steps {
//         sh 'whoami;hostname;uptime'
//       }
//     }

//     stage('Build Docker Image') {
//       steps {
//         sh '''cd tumblr-replica;
// docker build . \\
// -f Dockerfile \\
// -t tumbler-react'''
//       }
//     }

//     stage('Run Container') {
//       steps {
//         sh '''docker run \\
// --name tumbler-react \\
// --entrypoint /bin/sh \\
// -dt --rm tumbler-react'''
//       }
//     }

//     stage('Lint') {
//       steps {
//         sh 'docker exec tumbler-react sh -c \'sh lint.sh\''
//       }
//     }

//     stage('Test') {
//       steps {
//         sh 'docker exec tumbler-react sh -c \'sh test.sh\''
//       }
//     }

//     stage('Stop Container & Remove Image') {
//       steps {
//         sh 'docker container stop tumbler-react'
//         sh 'docker image remove tumbler-react'
//         sh 'docker system prune -f'
//       }
//     }

//     stage('List Docker Images & Containers') {
//       steps {
//         sh 'docker image ls -a'
//         sh 'docker container ls -a'
//       }
//     }

    stage('Deploy To dev-server') {
      agent {
        node {
          label 'dev-server'
        }
      }
      when {
        branch 'dev'
      }
      steps {
        sh 'whoami;hostname;uptime'
        sh '''cd tumblr-replica;
#az storage file download --account-name tumblerstorageaccount -s tumbler-secrets -p frontend.dev.env --dest .env;
docker-compose -f docker-compose.dev.yml up -d --build;
#docker system prune -f;'''
        build job: "/Testing/main", wait: false
      }
      post {
        always {
          discordSend(
            title: JOB_NAME,
            link: env.BUILD_URL,
            description: "${JOB_NAME} DEV Deployment Status: ${currentBuild.currentResult}",
            result: currentBuild.currentResult,
            thumbnail: 'https://i.dlpng.com/static/png/6378770_preview.png',
            webhookURL: 'https://discord.com/api/webhooks/921772869782994994/mi4skhArIoT6heXWebPiWLn6Xc95rZgUqtW7qriBOYvnl0sTdfn16we7yPY-n-DJYRmH'
          )
        }
      }
    }
    // stage('Deploy To Production') {
    //   agent {
    //     node {
    //       label 'prod-server'
    //     }
    //   }
    //   when {
    //     branch 'main'
    //   }
    //   steps {
    //     sh 'whoami;hostname;uptime'
    //     sh '''cd tumblr-replica; docker-compose up -d --build;'''
    //     build job: "/Testing/main", wait: true
    //   }
    //   post {
    //     always {
    //       discordSend(
    //         title: JOB_NAME,
    //         link: env.BUILD_URL,
    //         description: "${JOB_NAME} PROD Deployment Status: ${currentBuild.currentResult}",
    //         result: currentBuild.currentResult,
    //         thumbnail: 'https://i.dlpng.com/static/png/6378770_preview.png',
    //         webhookURL: 'https://discord.com/api/webhooks/921772869782994994/mi4skhArIoT6heXWebPiWLn6Xc95rZgUqtW7qriBOYvnl0sTdfn16we7yPY-n-DJYRmH'
    //       )
    //     }
    //   }
    // }
  }

  post {
    unsuccessful {
      sh 'docker container stop tumbler-react || true'
      sh 'docker image remove tumbler-react || true'
      sh 'docker system prune -f'
    }

    cleanup {
      cleanWs()
    }
  }
}
