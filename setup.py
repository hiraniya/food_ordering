from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in food_ordering/__init__.py
from food_ordering import __version__ as version

setup(
	name="food_ordering",
	version=version,
	description="Food Ordering",
	author="hiraniya",
	author_email="hi@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
