'use strict';

define('ga-wdi-boston.ember-template-test/tests/adapters/application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('ga-wdi-boston.ember-template-test/tests/helpers/destroy-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ga-wdi-boston.ember-template-test/tests/helpers/start-app', 'ga-wdi-boston.ember-template-test/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _destroyApp.default)(this.application);
      }
    });
  };
});
define('ga-wdi-boston.ember-template-test/tests/helpers/module-for-acceptance.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/helpers/resolver', ['exports', 'ga-wdi-boston.ember-template-test/resolver', 'ga-wdi-boston.ember-template-test/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('ga-wdi-boston.ember-template-test/tests/helpers/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/helpers/start-app', ['exports', 'ember', 'ga-wdi-boston.ember-template-test/app', 'ga-wdi-boston.ember-template-test/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var application = void 0;

    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    _ember.default.run(function () {
      application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ga-wdi-boston.ember-template-test/tests/helpers/start-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/router.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/serializers/application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/services/auth.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | services/auth.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/auth.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/test-helper', ['ga-wdi-boston.ember-template-test/tests/helpers/resolver', 'ember-qunit'], function (_resolver, _emberQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
});
define('ga-wdi-boston.ember-template-test/tests/test-helper.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ga-wdi-boston.ember-template-test/tests/unit/adapters/application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define("ga-wdi-boston.ember-template-test/tests/unit/serializers/application-test", [], function () {
  "use strict";
});
define('ga-wdi-boston.ember-template-test/tests/unit/serializers/application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/serializers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass jshint.');
  });
});
define('ga-wdi-boston.ember-template-test/tests/unit/services/auth-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:auth', 'Unit | Service | auth', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ga-wdi-boston.ember-template-test/tests/unit/services/auth-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/services/auth-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/auth-test.js should pass jshint.');
  });
});
require('ga-wdi-boston.ember-template-test/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
