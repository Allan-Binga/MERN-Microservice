pipeline {
    agent any

    // Define tools to be installed
    tools {
        // Install Node.js tool with a specific version
        nodejs 'node:latest'
    }

    // environment {
    //     JWT_SECRET = 'TestSecreatKey'
    //     MONGO_URI = 'mongodb+srv://<username>:<password>@cluster0.zct2z4b.mongodb.net/?retryWrites=true&w=majority'
    // }
    stages {
        stage('Checkout') {
      steps {
        // Check out the repository from GitHub
        git branch: 'master', url: 'https://github.com/jimmyptl-jer/Blog-Application.git'
      }
        }

        stage('Install Client Dependencies') {
      steps {
        // Change to the client directory and install dependencies
        dir('frontend') {
          sh 'npm install'
        }
      }
        }

    //     stage('Build Frontend') {
    //   steps {
        // Change to the client directory and run the build command
        // dir('frontend') {
        //   sh 'npm run build'
        // }
      }
        }

    //     stage('Install Backend Dependencies') {
    //   steps {
        // Change to the backend directory and install dependencies
        // dir('server') {
        //   sh 'npm install'
        //   sh 'export MONGODB_URI=$MONGODB_URI'
        //   sh 'export TOKEN_KEY=$TOKEN_KEY'
        // }
    //   }
    //     }
    // }

    post {
        success {
      echo 'Pipeline completed successfully!'
        }
        failure {
      echo 'Pipeline failed.'
        }
    }
}