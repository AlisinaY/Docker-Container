



pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Der Name, den Sie in der Jenkins-Konfiguration angegeben haben
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install -D webpack-cli' // Installiere webpack-cli
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
