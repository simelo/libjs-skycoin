
set -ex
sudo apt-get update
curl -sL -o ~/bin/gimme https://raw.githubusercontent.com/travis-ci/gimme/master/gimme
chmod +x ~/bin/gimme
sudo apt install gcc libpcre3-dev g++ gcc-multilib g++-multilib libjavascriptcoregtk-1.0-dev -y
# https://phoenixnap.dl.sourceforge.net/project/swig/swig/swig-4.0.0/swig-4.0.0.tar.gz
# mkdir swig_build && cd swig_build && wget http://prdownloads.sourceforge.net/swig/swig-3.0.12.tar.gz && tar -zxf swig-3.0.12.tar.gz && cd swig-3.0.12 && sudo ./configure --prefix=/usr && sudo make && sudo make install && cd ../../ && sudo rm -rf swig_build
mkdir swig_build && cd swig_build && wget https://phoenixnap.dl.sourceforge.net/project/swig/swig/swig-4.0.0/swig-4.0.0.tar.gz && tar -zxf swig-4.0.0.tar.gz && cd swig-4.0.0 && sudo ./configure --prefix=/usr && sudo make && sudo make install && cd ../../ && sudo rm -rf swig_build

npm install -g node-gyp 